import { organisationUserValidationSchemaReadOrganisationUser } from '@app-crvsp/schemas';

describe('organisationUserValidationSchemaReadOrganisationUser', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        organisationUserId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...organisationUserValidationSchemaReadOrganisationUser };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
