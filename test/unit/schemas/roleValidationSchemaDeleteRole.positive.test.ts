import { roleValidationSchemaDeleteRole } from '@app-crvsp/schemas';

describe('roleValidationSchemaDeleteRole', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        roleId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...roleValidationSchemaDeleteRole };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
