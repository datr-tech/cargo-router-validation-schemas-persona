import { organisationRoleValidationSchemaDeleteOrganisationRole } from '@app-crvsp/schemas';

describe('organisationRoleValidationSchemaDeleteOrganisationRole', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        organisationRoleId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...organisationRoleValidationSchemaDeleteOrganisationRole };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
