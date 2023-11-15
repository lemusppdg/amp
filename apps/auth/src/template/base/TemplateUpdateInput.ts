/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DocumentUpdateManyWithoutTemplatesInput } from "./DocumentUpdateManyWithoutTemplatesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TemplateUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DocumentUpdateManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => DocumentUpdateManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => DocumentUpdateManyWithoutTemplatesInput, {
    nullable: true,
  })
  documents?: DocumentUpdateManyWithoutTemplatesInput;
}

export { TemplateUpdateInput as TemplateUpdateInput };
