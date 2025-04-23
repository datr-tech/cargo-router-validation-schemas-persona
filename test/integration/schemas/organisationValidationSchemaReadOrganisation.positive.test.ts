import { organisationValidationSchemaReadOrganisation } from '../../../dist';

describe('organisationValidationSchemaReadOrganisation', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        organisationId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...organisationValidationSchemaReadOrganisation };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
