export function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}

export function signInWithGitHub() {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}

export function signup(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}