import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);

export const selectSection = title => createSelector(
  [selectDirectorySections],
  sections => sections.find(section => section.title === title)
);
