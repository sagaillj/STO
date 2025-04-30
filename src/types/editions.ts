export type EditionType = 'Personal' | 'Group' | 'Community' | 'Admin';

export const editionMapping = {
  personal: 'Personal',
  group: 'Group',
  community: 'Community',
  admin: 'Admin',
} as const;

export const getEditionDisplay = (edition: Lowercase<EditionType>): EditionType => {
  return editionMapping[edition];
}; 