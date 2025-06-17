import { Prop } from '@nestjs/mongoose';
import { Expose, Transform } from 'class-transformer';

export class MemberEntity {
  @Expose({ name: 'id' })
  @Transform(({ obj }) => (obj._id ? obj._id.toString() : null), {
    toClassOnly: true,
  })
  public id: string;

  @Expose()
  @Prop({ type: String, unique: true, required: true })
  memberid: number;

  @Expose()
  @Prop({ type: Number, required: true })
  idcard: number;
  
  @Expose()
  @Prop({ type: String, default: Date.now })
  organization: string;

   @Expose()
  @Prop({ type: String, default: Date.now })
  contactperson: string;

  @Expose()
  @Prop({ type: String, default: Date.now })
  contactphone: string;

  @Expose()
  @Prop({ type: Date })
  updatedAt: Date;

  @Expose()
  @Prop({ type: Object })
  createdBy: any;

  @Expose()
  @Prop({ type: Object })
  updatedBy: any;
}
