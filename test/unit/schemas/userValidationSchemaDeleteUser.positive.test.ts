import { userValidationSchemaDeleteUser } from '@app-crvsp/schemas';

describe('userValidationSchemaDeleteUser', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        userId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...userValidationSchemaDeleteUser };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
