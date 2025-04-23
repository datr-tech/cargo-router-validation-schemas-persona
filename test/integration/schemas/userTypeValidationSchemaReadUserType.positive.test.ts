import { userTypeValidationSchemaReadUserType } from '../../../dist';

describe('userTypeValidationSchemaReadUserType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        userTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...userTypeValidationSchemaReadUserType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
