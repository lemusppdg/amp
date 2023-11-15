import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserTypeModuleBase } from "./base/userType.module.base";
import { UserTypeService } from "./userType.service";
import { UserTypeResolver } from "./userType.resolver";

@Module({
  imports: [UserTypeModuleBase, forwardRef(() => AuthModule)],
  providers: [UserTypeService, UserTypeResolver],
  exports: [UserTypeService],
})
export class UserTypeModule {}
