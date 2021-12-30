import request from 'supertest';
import { app } from '../../app';

it('fails when the email supplied is not exist', async () => {
	await request(app)
		.post('/api/users/signin')
		.send({
			email: 'test@test.com',
		  password: 'password'
		})
		.expect(400);
});

it('fails when the wrong password is supplied', async () => {
	await request(app)
		.post('/api/users/signup')
		.send({
			email: 'test@test.com',
		  password: 'password'
		})
		.expect(201);

	await request(app)
		.post('/api/users/signin')
		.send({
			email: 'test@test.com',
		  password: '123'
		})
		.expect(400);
});

it('signin successful', async () => {
	await request(app)
		.post('/api/users/signup')
		.send({
			email: 'test@test.com',
		  password: 'password'
		})
		.expect(201);

	await request(app)
		.post('/api/users/signin')
		.send({
			email: 'test@test.com',
		  password: 'password'
		})
		.expect(200);
});