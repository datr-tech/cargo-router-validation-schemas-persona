import { organisationValidationSchemaDeleteOrganisation } from '@app-crvsp/schemas';

describe('organisationValidationSchemaDeleteOrganisation', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        organisationId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...organisationValidationSchemaDeleteOrganisation };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
