import { userValidationSchemaReadUser } from '../../../dist';

describe('userValidationSchemaReadUser', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        userId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...userValidationSchemaReadUser };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
