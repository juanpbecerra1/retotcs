package com.tcs.backend.empresa;


import javafx.scene.chart.XYChart;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table (name = "empleado")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Empleado {

    @Id
    @Column (name = "id_Empleado")
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "Primer_Nombre")
    private String primerNombre;
    @Column(name = "Segundo_Nombre")
    private String segundoNombre;
    @Column(name = "Primer_Apellido")
    private String primerApellido;
    @Column(name = "Segundo_Apellido")
    private String segundoApellido;
    @Column(name = "Identificacion")
    private String identificacion;
    @Column(name = "Correo")
    private String correo;
    @Column(name = "Telefono")
    private String telefono;
    @Column(name = "Activo")
    private String activo;
    @Column(name = "Salario")
    private double salario;
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="Departamento",referencedColumnName="id_departamento")
    Departamento departamento;

}
