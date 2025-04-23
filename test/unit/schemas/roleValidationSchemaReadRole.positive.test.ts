import { roleValidationSchemaReadRole } from '@app-crvsp/schemas';

describe('roleValidationSchemaReadRole', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        roleId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...roleValidationSchemaReadRole };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
