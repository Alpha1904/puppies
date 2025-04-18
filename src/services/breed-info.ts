/**
 * Represents information about a specific dog breed.
 */
export interface BreedInfo {
  /**
   * The name of the breed.
   */
  name: string;
  /**
   * A description of the breed's characteristics.
   */
  characteristics: string;
  /**
   * The care requirements for the breed.
   */
  careRequirements: string;
  /**
   * The temperament of the breed.
   */
temperament: string;
}

/**
 * Asynchronously retrieves breed information for a given breed name.
 *
 * @param breedName The name of the breed to retrieve information for.
 * @returns A promise that resolves to a BreedInfo object containing breed details.
 */
export async function getBreedInfo(breedName: string): Promise<BreedInfo> {
  // TODO: Implement this by calling an API.

  return {
    name: breedName,
    characteristics: 'Loyal, intelligent, and eager to please.',
    careRequirements: 'Regular exercise and grooming.',
    temperament: 'Friendly and good with children.',
  };
}
