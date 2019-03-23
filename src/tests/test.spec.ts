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


// this is a test file that we found here and that we adapted as much as we could
/*https://github.com/mwanago/express-typescript/blob/part-10/src/authentication/tests/authentication.service.test.ts

describe('when registering a user', () => {

   // cant finish this part
    /*describe('if the email is already taken', () => {
      it('should throw an error', async () => {
        const userData: CreateUserDto = {
          fullName: 'John Smith',
          email: 'john@smith.com',
          password: 'strongPassword123',
        };
        });
       
      });
      });
    
    describe('if the email is not taken', () => {
      it('should not throw an error', async () => {
        const userData = {
          fullName: 'John Smith',
          email: 'john@smith.com',
          password: 'strongPassword123',
        };
        request.post
        await expect(authenticationService.register(userData))
          .resolves.toBeDefined();
      });
    });
  });
});
*/
