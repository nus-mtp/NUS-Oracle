import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// This script defines the schema and the collection initialisation
// for Focus Areas.

// Additional Limitation for the object inside the last three
// elements are governed in the method.
class FocusAreaCollection extends Mongo.Collection {}

const focusAreaSchema = {
  name: {
    type: String
  },
  moduleListPrimary: {
    type: Object
  },
  moduleListFourThousands: {
    type: Object
  },
  moduleListNonPrimary: {
    type: Object
  }
}

const FocusArea = new FocusAreaCollection('focusArea');
FocusArea.attachSchema(focusAreaSchema);