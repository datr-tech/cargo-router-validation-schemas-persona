import { organisationValidationSchemaCreateOrganisation } from '@app-crvsp/schemas';

describe('organisationValidationSchemaCreateOrganisation', () => {
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
        frameworkId: { in: 'body', isMongoId: true, notEmpty: false },
        name: {
          in: 'body',
          isString: true,
          isLength: { options: { min: 8, max: 100 } },
          notEmpty: true,
        },
        organisationTypeId: { in: 'body', isMongoId: true, notEmpty: false },
      };

      const foundSchema = { ...organisationValidationSchemaCreateOrganisation };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
