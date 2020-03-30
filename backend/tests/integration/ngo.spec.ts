import request from 'supertest';
import NGO from '@be-the-hero/core/models/ngo';
import app from '../../src/app';
import connection from '../../src/data/connection';

describe('NGO', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create a new NGO', async () => {
    const ngo = <NGO>{
      name: 'My NGO',
      email: 'contact@myngo.org',
      whatsapp: '1234-56789',
      city: 'Test City',
      uf: 'TC',
    };

    const response = await request(app).post('/ngos').send(ngo);
    const result = response.body as { id: string };

    expect(result).toHaveProperty('id');
    expect(result.id).toHaveLength(8);
  });
});
