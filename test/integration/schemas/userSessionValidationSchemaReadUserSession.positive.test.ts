import { userSessionValidationSchemaReadUserSession } from '../../../dist';

describe('userSessionValidationSchemaReadUserSession', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        userSessionId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...userSessionValidationSchemaReadUserSession };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
