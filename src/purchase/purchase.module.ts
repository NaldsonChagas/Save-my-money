import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './purchase.entity';
import { InstallmentsModule } from 'src/installments/installments.module';
import { UserModule } from 'src/user/user.module';
import { CategoryModule } from 'src/category/category.module';
import { CsvModule } from 'src/csv/csv.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Purchase]),
    InstallmentsModule,
    UserModule,
    CategoryModule,
    CsvModule
  ],
  controllers: [PurchaseController],
  providers: [PurchaseService]
})
export class PurchaseModule {}
