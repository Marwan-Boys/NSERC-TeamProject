export const createProject = (project, uid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        const docRef = firestore.collection("users").doc(uid);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                //console.log("Document data:", doc.data());
                firestore.collection('projects').add({
                    ...project,
                    authorFirstName: doc.data().firstName,
                    authorLastName: doc.data().lastName,
                    authorId: uid,
                    project: project.project,
                    description: project.description,
                    createdAt: new Date()
                }).then(() => {
                    dispatch({ type: 'CREATE_PROJECT', project});
                    window.location="/dashboard";
                }).catch((err) => {
                    dispatch({ type: 'CREATE_PROJECT_ERROR', err});
                })
            }
        }).catch(function(err) {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        });
    }
};