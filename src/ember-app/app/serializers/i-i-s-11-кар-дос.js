import { Serializer as КарДосSerializer } from
  '../mixins/regenerated/serializers/i-i-s-11-кар-дос';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КарДосSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
