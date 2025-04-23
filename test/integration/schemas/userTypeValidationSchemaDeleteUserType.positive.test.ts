import { userTypeValidationSchemaDeleteUserType } from '../../../dist';

describe('userTypeValidationSchemaDeleteUserType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        userTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...userTypeValidationSchemaDeleteUserType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
