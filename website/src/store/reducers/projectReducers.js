const initState = {
    projects:[
        {id: '1', title: 'Apple grinder', content: 'Fast way to eat apple'},
        {id: '2', title: 'Computer cleaner', content: 'Blows every, literally everything...'},
        {id: '3', title: 'Star collector', content: 'blah blah blah!!!'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('Created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Create project error', action.err);
            return state;
        default:
            return state;
    }
};
export default projectReducer;