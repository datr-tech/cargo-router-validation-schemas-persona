import { organisationUserValidationSchemaDeleteOrganisationUser } from '../../../dist';

describe('organisationUserValidationSchemaDeleteOrganisationUser', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        organisationUserId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...organisationUserValidationSchemaDeleteOrganisationUser };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
