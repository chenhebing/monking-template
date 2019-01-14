export default ({createSchema, createModel}) => {
    const schema = createSchema({
        name: String,
        age: Number
    });

    return createModel('user', schema);
};
