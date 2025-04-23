import { organisationRoleValidationSchemaReadOrganisationRole } from '../../../dist';

describe('organisationRoleValidationSchemaReadOrganisationRole', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        organisationRoleId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...organisationRoleValidationSchemaReadOrganisationRole };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
