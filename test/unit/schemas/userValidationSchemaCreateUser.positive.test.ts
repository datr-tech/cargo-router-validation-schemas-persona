import { userValidationSchemaCreateUser } from '@app-crvsp/schemas';

describe('userValidationSchemaCreateUser', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        adminStatusId: {
          default: 'undefined',
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          optional: { values: 'undefined' },
        },
        adminUserId: { in: 'body', isMongoId: true, notEmpty: false },
        password: {
          in: 'body',
          isString: true,
          isLength: { options: { min: 8, max: 20 } },
          notEmpty: true,
        },
        userTypeId: { in: 'body', isMongoId: true, notEmpty: false },
        username: {
          in: 'body',
          isString: true,
          isLength: { options: { min: 8, max: 20 } },
          notEmpty: true,
        },
      };

      const foundSchema = { ...userValidationSchemaCreateUser };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
