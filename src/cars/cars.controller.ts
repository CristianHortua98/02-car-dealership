import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    // getCarById(@Param() params: any){
    // getCarById(@Param('id', ParseUUIDPipe) id: string){
    getCarById(@Param('id', new ParseUUIDPipe({version: '4'})) id: string){
        //return this.cars[id]
        console.log({id});
        return this.carsService.findOneById(id);

    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto){
        console.log({createCarDto});
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    updateCar(@Body() updateCarDto: UpdateCarDto, @Param('id', ParseUUIDPipe) id: string){
        // console.log({updateCarDto});
        // console.log({id});
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.delete(id);
    }


}
