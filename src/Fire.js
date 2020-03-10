import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBNqQ77Cu3SpmljehcTRqCWOT7hlOlRcbw",
    authDomain: "artiground-4401a.firebaseapp.com",
    databaseURL: "https://artiground-4401a.firebaseio.com",
    projectId: "artiground-4401a",
    storageBucket: "artiground-4401a.appspot.com",
    messagingSenderId: "1046451537408",
    appId: "1:1046451537408:web:caddfdb3b375155759bae5"
};

class Fire {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }

    addPost = async ({text, localUri}) => {
        const remoteUri = await this.uploadPhotoAsync(localUri, `photos/${this.uid}/${Date.now()}`)

        return new Promise((res, rej) => {
            this.firestore.collection("posts").add({
                text,
                uid: this.uid,
                timestamp: this.timestamp,
                image: remoteUri
            })
            .then(ref => {
                res(ref)
            })
            .catch(error => {
                rej(error)
            })
        })
    }

    uploadPhotoAsync = async (uri, filename) => {
        return new Promise(async (res, rej) => {
            const response = await fetch(uri)
            const file = await response.blob()

            let upload = firebase.storage().ref(filename).put(file)

            upload.on(
                "state_changed", 
                snapshot => {}, 
                err => {
                    res(err)
                },
                async () => {
                    const uri = await upload.snapshot.ref.getDownloadURL()
                    res(uri)
                }
            )
        })
    }

    createUser = async user => {
        try { 
            await firebase
                    .auth()
                    .createUserWithEmailAndPassword(user.email, user.password)

            let db = this.firestore
                            .collection("users")
                            .doc(this.uid)

            db.set({
                name: user.name,
                email: user.email,
                avatar: null
            })
        } catch (error) {
            alert("Error: ", error)
        }
    }

    addAvatar = async avatar => {
        let remoteUri = null

        try {
            let db = this.firestore
                            .collection("users")
                            .doc(this.uid)

            if (avatar) {
                remoteUri = await this.uploadPhotoAsync(avatar, `avatars/${this.uid}`)

                db.set({avatar: remoteUri}, {merge: true})
            }
        } catch (error) {
            alert("Error: ", error)
        }
    }

    get firestore() {
        return firebase.firestore()
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }

    get timestamp() {
        return Date.now()
    }
}

Fire.shared = new Fire()
export default Fire;