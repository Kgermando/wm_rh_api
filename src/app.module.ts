import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { DepartementModule } from './departement/departement.module';
import { UploadfileModule } from './uploadfile/uploadfile.module';
import { FonctionModule } from './fonction/fonction.module'; 
import { SiteLocationModule } from './site-location/site-location.module';
import { TitleModule } from './title/title.module';
import { ApointementModule } from './apointement/apointement.module';
import { CandidatureModule } from './candidature/candidature.module';
import { PosteModule } from './poste/poste.module';
import { MonnaieModule } from './monnaie/monnaie.module';
import { ServicePrefModule } from './service-pref/service-pref.module';
import { PreferenceModule } from './preference/preference.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kataku',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    CommonModule,
    DepartementModule,
    UploadfileModule,
    FonctionModule,
    SiteLocationModule,
    TitleModule,
    ApointementModule,
    CandidatureModule,
    PosteModule,
    MonnaieModule,
    ServicePrefModule,
    PreferenceModule,
  ],
})
export class AppModule {}
