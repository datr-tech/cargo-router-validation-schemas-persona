import { organisationTypeValidationSchemaDeleteOrganisationType } from '../../../dist';

describe('organisationTypeValidationSchemaDeleteOrganisationType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        organisationTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...organisationTypeValidationSchemaDeleteOrganisationType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
