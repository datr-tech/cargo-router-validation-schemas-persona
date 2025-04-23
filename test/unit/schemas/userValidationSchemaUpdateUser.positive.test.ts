import { userValidationSchemaUpdateUser } from '@app-crvsp/schemas';

describe('userValidationSchemaUpdateUser', () => {
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
        adminUserId: {
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        password: {
          in: 'body',
          isString: true,
          isLength: { options: { min: 8, max: 20 } },
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        userTypeId: {
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        userId: { in: 'params', isMongoId: true, notEmpty: true },
        username: {
          in: 'body',
          isString: true,
          isLength: { options: { min: 8, max: 20 } },
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
      };

      const foundSchema = { ...userValidationSchemaUpdateUser };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
