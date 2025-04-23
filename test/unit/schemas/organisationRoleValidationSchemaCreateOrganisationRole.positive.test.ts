import { organisationRoleValidationSchemaCreateOrganisationRole } from '@app-crvsp/schemas';

describe('organisationRoleValidationSchemaCreateOrganisationRole', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        adminStatusId: {
          default: 'undefined',
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          optional: { values: 'undefined' },
        },
        adminUserId: { in: 'body', isMongoId: true, notEmpty: false },
        description: {
          default: 'undefined',
          in: 'body',
          isString: true,
          isLength: { options: { min: 1, max: 200 } },
          notEmpty: false,
          optional: { values: 'undefined' },
        },
        name: {
          in: 'body',
          isString: true,
          isLength: { options: { min: 8, max: 100 } },
          notEmpty: true,
        },
        organisationId: { in: 'body', isMongoId: true, notEmpty: false },
        roleId: { in: 'body', isMongoId: true, notEmpty: false },
      };

      const foundSchema = { ...organisationRoleValidationSchemaCreateOrganisationRole };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
