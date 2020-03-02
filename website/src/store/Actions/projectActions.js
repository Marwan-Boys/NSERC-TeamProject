export const createProject = (project, callback) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Nishchal',
            authorLastName: 'Nepal',
            authorId: 12345,
            project: project.project,
            description: project.description,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project});
            callback=true;
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
            callback=false;
        })
    }
}