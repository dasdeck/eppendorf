// console.log(process.env.MONGO_HOST)
const config: any = {
    db: {
        host: 'localhost',
        port: 27017,
        db: 'eppendorf',
        dbtest: 'eppendorf-test',

    },
    server: {
        port: 3001
    }
};

export default config