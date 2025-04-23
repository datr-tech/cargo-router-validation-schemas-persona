import { organisationTypeValidationSchemaReadOrganisationType } from '@app-crvsp/schemas';

describe('organisationTypeValidationSchemaReadOrganisationType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        organisationTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...organisationTypeValidationSchemaReadOrganisationType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
