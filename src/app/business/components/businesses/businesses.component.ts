import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BusinessService } from '../../../core/services/business/business.service';
import { Business, BusinessDetail, BusinessConfig } from '../../../core/models/business/business.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss']
})
export class BusinessesComponent implements OnInit {

  paramForm0: FormGroup;
  paramForm1: FormGroup;
  paramForm2: FormGroup;
  paramForm3: FormGroup;
  paramForm4: FormGroup;
  paramForm5: FormGroup;
  paramForm6: FormGroup;
  paramForm7: FormGroup;
  paramForm8: FormGroup;
  paramForm9: FormGroup;
  paramForm10: FormGroup;
  paramForm11: FormGroup;
  paramForm12: FormGroup;
  paramForm13: FormGroup;
  paramForm14: FormGroup;
  paramForm15: FormGroup;
  paramForm16: FormGroup;
  paramForm17: FormGroup;
  paramForm18: FormGroup;
  paramForm19: FormGroup;
  paramForm20: FormGroup;
  businessConfig: BusinessConfig; //

  showFiller = false;
  step = 0;

  iIdNegocio: number;
  business: Business;
  businessDetail: BusinessDetail[];

  userName: string;

  check0 = false;
  checked = false;
  colorInput = 'primary';

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

   // Creación del formulario desde un json
   private buildForm() {
    this.paramForm0 = this.formBuilder.group({
        bIsAppConfig: new FormControl(''),
        sData: new FormControl(''),
        sParametro: new FormControl('')
    });

    this.paramForm1 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm2 = this.formBuilder.group({
        bIsAppConfig: new FormControl(''),
        sData: new FormControl(''),
        sParametro: new FormControl('')
    });

    this.paramForm3 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm4 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm5 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm6 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm7 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm8 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm9 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm10 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm11 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm12 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm13 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm14 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm15 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm16 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm17 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm18 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm19 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm20 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.iIdNegocio = (Number(this.route.snapshot.paramMap.get('idNegocio')));
    this.userName = this.route.snapshot.paramMap.get('userName');
    this.businessService.getBusinessConfig(this.iIdNegocio).subscribe(business => {
      this.business = business;
      this.businessDetail = business.detalle;

      if (this.business.resultDto.iResultado === 'Ok'){
        this.paramForm0.patchValue({
          bIsAppConfig: this.businessDetail[0].bIsAppConfig,
          sData: this.businessDetail[0].sData,
          sParametro: this.businessDetail[0].sParametro
        });

        this.paramForm1.patchValue({
          bIsAppConfig: this.businessDetail[1].bIsAppConfig,
          sData: this.businessDetail[1].sData,
          sParametro: this.businessDetail[1].sParametro
        });

        this.paramForm2.patchValue({
          bIsAppConfig: this.businessDetail[2].bIsAppConfig,
          sData: this.businessDetail[2].sData,
          sParametro: this.businessDetail[2].sParametro
        });

        this.paramForm3.patchValue({
          bIsAppConfig: this.businessDetail[3].bIsAppConfig,
          sData: this.businessDetail[3].sData,
          sParametro: this.businessDetail[3].sParametro
        });

        this.paramForm4.patchValue({
          bIsAppConfig: this.businessDetail[4].bIsAppConfig,
          sData: this.businessDetail[4].sData,
          sParametro: this.businessDetail[4].sParametro
        });

        this.paramForm5.patchValue({
          bIsAppConfig: this.businessDetail[5].bIsAppConfig,
          sData: this.businessDetail[5].sData,
          sParametro: this.businessDetail[5].sParametro
        });

        this.paramForm6.patchValue({
          bIsAppConfig: this.businessDetail[6].bIsAppConfig,
          sData: this.businessDetail[6].sData,
          sParametro: this.businessDetail[6].sParametro
        });

        this.paramForm7.patchValue({
          bIsAppConfig: this.businessDetail[7].bIsAppConfig,
          sData: this.businessDetail[7].sData,
          sParametro: this.businessDetail[7].sParametro
        });

        this.paramForm8.patchValue({
          bIsAppConfig: this.businessDetail[8].bIsAppConfig,
          sData: this.businessDetail[8].sData,
          sParametro: this.businessDetail[8].sParametro
        });

        this.paramForm9.patchValue({
          bIsAppConfig: this.businessDetail[9].bIsAppConfig,
          sData: this.businessDetail[9].sData,
          sParametro: this.businessDetail[9].sParametro
        });

        this.paramForm10.patchValue({
          bIsAppConfig: this.businessDetail[10].bIsAppConfig,
          sData: this.businessDetail[10].sData,
          sParametro: this.businessDetail[10].sParametro
        });

        this.paramForm11.patchValue({
          bIsAppConfig: this.businessDetail[11].bIsAppConfig,
          sData: this.businessDetail[11].sData,
          sParametro: this.businessDetail[11].sParametro
        });

        this.paramForm12.patchValue({
          bIsAppConfig: this.businessDetail[12].bIsAppConfig,
          sData: this.businessDetail[12].sData,
          sParametro: this.businessDetail[12].sParametro
        });

        this.paramForm13.patchValue({
          bIsAppConfig: this.businessDetail[13].bIsAppConfig,
          sData: this.businessDetail[13].sData,
          sParametro: this.businessDetail[13].sParametro
        });

        this.paramForm14.patchValue({
          bIsAppConfig: this.businessDetail[14].bIsAppConfig,
          sData: this.businessDetail[14].sData,
          sParametro: this.businessDetail[14].sParametro
        });

        this.paramForm15.patchValue({
          bIsAppConfig: this.businessDetail[15].bIsAppConfig,
          sData: this.businessDetail[15].sData,
          sParametro: this.businessDetail[15].sParametro
        });

        /*this.paramForm16.patchValue({
          bIsAppConfig: this.businessDetail[16].bIsAppConfig,
          sData: this.businessDetail[16].sData,
          sParametro: this.businessDetail[16].sParametro
        });

        this.paramForm17.patchValue({
          bIsAppConfig: this.businessDetail[17].bIsAppConfig,
          sData: this.businessDetail[17].sData,
          sParametro: this.businessDetail[17].sParametro
        });

        this.paramForm18.patchValue({
          bIsAppConfig: this.businessDetail[18].bIsAppConfig,
          sData: this.businessDetail[18].sData,
          sParametro: this.businessDetail[18].sParametro
        });

        this.paramForm19.patchValue({
          bIsAppConfig: this.businessDetail[19].bIsAppConfig,
          sData: this.businessDetail[19].sData,
          sParametro: this.businessDetail[19].sParametro
        });

        this.paramForm20.patchValue({
          bIsAppConfig: this.businessDetail[20].bIsAppConfig,
          sData: this.businessDetail[20].sData,
          sParametro: this.businessDetail[20].sParametro
        });*/

      }else{
        alert(this.business.resultDto.sDetalle);
    }
    });

  }

  // Function de inicio de sesion
  updateParameter(event: Event, form: FormGroup){
    event.preventDefault();
    if (form.valid) {
        const setBusinessDetailAux: BusinessDetail = {
          sParametro: form.value.sParametro,
          bIsAppConfig: form.value.bIsAppConfig,
          iIdNegocio: this.iIdNegocio,
          sData: form.value.sData
      };

        this.businessService.setBusinessConfig(setBusinessDetailAux).subscribe(businessConfig => {
        this.businessConfig = businessConfig;
        if (this.businessConfig.resultDto.iResultado === 'Ok'){
          alert(this.businessConfig.resultDto.sDetalle);
          window.location.reload();
        }else{
          alert(this.businessConfig.detalle);
        }
      });
  }
}

}

/* Configuracion negocios

{
    "detalle": [
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "1",
            "sParametro": "B_MUESTRAMONTOPESOS"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "1",
            "sParametro": "B_PEDIRPASSWORD"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "1",
            "sParametro": "B_VALIDARMAIL"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "1",
            "sParametro": "B_VALIDARTELEFONO"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "#000000",
            "sParametro": "COLOR_FONDO"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "1",
            "sParametro": "REGISTRO_CODIGOPOSTAL"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "1",
            "sParametro": "REGISTRO_CORREO"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "1",
            "sParametro": "REGISTRO_DIRECCION"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "1",
            "sParametro": "REGISTRO_ESTADO"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "1",
            "sParametro": "REGISTRO_NOMBRE"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "1",
            "sParametro": "REGISTRO_TELEFONO"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "Nombre de menu",
            "sParametro": "SNOMBRE_MENU_X"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "http://automatizate.mx/aviso-de-privacidad/",
            "sParametro": "URL_AVISOPRIVACIDAD"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "https://organicoynatural.mx/RewardsImg/AnversoTarjeta.png",
            "sParametro": "URL_DISENO_TARJETA"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "https://organicoynatural.mx/RewardsImg/ReversoTarjeta.jpeg",
            "sParametro": "URL_DISENO_TARJETA_REVERSO"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sData": "https://organicoynatural.mx/RewardsImg/logobello.png",
            "sParametro": "URL_LOGOTIPO"
        }
    ],
    "resultDto": {
        "iResultado": "Ok",
        "sDetalle": "Consulta exitosa"
    }
}*/
