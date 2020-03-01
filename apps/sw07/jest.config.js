module.exports = {
  name: 'sw07',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw07',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
