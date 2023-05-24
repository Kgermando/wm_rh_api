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
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      expandVariables: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.db'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
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
