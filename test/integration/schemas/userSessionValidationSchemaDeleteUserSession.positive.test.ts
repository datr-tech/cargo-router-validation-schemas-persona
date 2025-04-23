import { userSessionValidationSchemaDeleteUserSession } from '../../../dist';

describe('userSessionValidationSchemaDeleteUserSession', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        userSessionId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...userSessionValidationSchemaDeleteUserSession };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
