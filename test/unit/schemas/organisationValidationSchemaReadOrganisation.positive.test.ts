import { organisationValidationSchemaReadOrganisation } from '@app-crvsp/schemas';

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
