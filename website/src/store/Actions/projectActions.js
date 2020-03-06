export const createProject = (project, uid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firebase = getFirebase();
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Nishchal',
            authorLastName: 'Nepal',
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
};