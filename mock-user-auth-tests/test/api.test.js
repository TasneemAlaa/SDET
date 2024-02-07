const request = require('supertest');
const app = require('../mock-server'); 

describe('User Routes', () => {
    let token;
  
    // Authenticate user
    it('should authenticate a user and return a token', async () => {
      const res = await request(app)
        .post('/api/v1/auth')
        .send({
          email: 'user@gmail.com',
          password: 'user123'
        });
  
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('token');
      token = res.body.token; 
    });
    // Valid/Invalid Body Tests
    it('should handle requests with valid body data', async () => {
        const res = await request(app)
            .post('/api/v1/users')
            .send({
                name: 'user',
                email: 'user@gmail.com',
                password: 'user123'
            })
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'User registered with success');
        expect(res.body).toHaveProperty('token');
    });

    it('should handle requests with invalid body data', async () => {
        const res = await request(app)
            .post('/api/v1/users')
            .send({
                // Invalid body data, missing required fields
            })
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(201);

    });

    // Valid/Invalid Authorization Tests
    it('should handle requests with valid authorization', async () => {
        const res = await request(app)
            .get('/api/v1/users')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(200);

    });

    it('should handle requests with invalid authorization', async () => {
        const res = await request(app)
            .get('/api/v1/users')
            // Invalid authorization token
            .set('Authorization', `Bearer invalid_token`);

        expect(res.statusCode).toEqual(200);
   
    });
    // Create user
    it('should create a new user and return a token', async () => {
      const res = await request(app)
        .post('/api/v1/users')
        .send({
          name: 'user',
          email: 'user@gmail.com',
          password: 'user123'
        })
        .set('Authorization', `Bearer ${token}`);
  
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('message', 'User registered with success');
      expect(res.body).toHaveProperty('token');
    });
  
    // Get user by token
    it('should retrieve a user by token', async () => {
      const res = await request(app)
        .get('/api/v1/users')
        .set('Authorization', `Bearer ${token}`);
  
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('name', 'user');
      expect(res.body).toHaveProperty('email', 'user@gmail.com');
    });
  
    // Patch user by token
    it('should update a user by token', async () => {
      const res = await request(app)
        .patch('/api/v1/users')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'newName',
          email: 'new_email@gmail.com',
          password: 'newpassword123'
        });
  
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'User updated with success');
    });
  
    // Delete user by token
    it('should delete a user by token', async () => {
      const res = await request(app)
        .delete('/api/v1/users')
        .set('Authorization', `Bearer ${token}`);
  
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'User deleted with success');
    });
  
    // Delete all users
    it('should delete all users', async () => {
      const res = await request(app)
        .delete('/api/v1/all-users')
        .send({
          key_admin: 'keyadmin123'
        });
  
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Users deleted with success');
    });
  });
  