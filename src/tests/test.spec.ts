import * as request from 'request';
import * as http from 'http';
describe('Test', () => {
    it('Should work', () => { });
    it('test api/status',()=>{
        request.get('http://localhost:8081/#/api/status',(rep)=>{
            rep === {"statuts":"Up"}

        })

    })
});