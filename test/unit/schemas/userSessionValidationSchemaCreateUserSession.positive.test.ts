import { userSessionValidationSchemaCreateUserSession } from '@app-crvsp/schemas';

describe('userSessionValidationSchemaCreateUserSession', () => {
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
        description: {
          default: 'undefined',
          in: 'body',
          isString: true,
          isLength: { options: { min: 1, max: 200 } },
          notEmpty: false,
          optional: { values: 'undefined' },
        },
        name: {
          in: 'body',
          isString: true,
          isLength: { options: { min: 8, max: 100 } },
          notEmpty: true,
        },
        userId: { in: 'body', isMongoId: true, notEmpty: false },
      };

      const foundSchema = { ...userSessionValidationSchemaCreateUserSession };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
