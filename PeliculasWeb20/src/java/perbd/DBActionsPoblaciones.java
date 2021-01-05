/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package perbd;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Calendar;

/**
 *
 * @author dsst
 */
public class DBActionsPoblaciones {

    public String getGPSPoblacion(String par) {
        String [] ciudad = par.split("-");
        DBConnection con = new DBConnection();
        String res = "{\"name\":\""+ciudad[0]+ "\",";
        try {
            con.open();
            Statement st1, st2;
            st1 = con.getConection().createStatement();
            st2 = con.getConection().createStatement();
            String sqlq = "select * from poblaciones where poblacion like \"" + ciudad[0] + "\" and pais = \"" +ciudad[1] + "\";";
            ResultSet rs = st1.executeQuery(sqlq);
            String aux;
            float lat, lon;
            if (rs.next()) {
                lat = rs.getFloat("lat");
                lon = rs.getFloat("lon");
                aux = "";
                aux = aux + "\"lat\":" + lat + ",";
                aux = aux + "\"lon\":" + lon + "";
                res = res + aux;
            }
            res = res + "}";
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            con.close();
        }
        return res;
    }
}
