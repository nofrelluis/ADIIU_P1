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
public class DBActionsNameBasics {

    public String getTodosPorEdad(String par) {
        DBConnection con = new DBConnection();
        String res = "{\"todosporedad\":[";
        try {
            con.open();
            Statement st = con.getConection().createStatement();
            ResultSet rs = st.executeQuery("select * from namebasics;");
            String aux;
            String nom;
            int nace;
            int muere;
            while (rs.next()) {
                nom = rs.getString("primaryname");
                nace = rs.getInt("birthyear");
                muere = rs.getInt("deathyear");
                if (muere < 0) {   // por si no ha muerto
                    muere = Calendar.getInstance().get(Calendar.YEAR);
                }
                if ((muere - nace) == (Integer.parseInt(par))) {
                    aux = "";
                    aux = aux + "{\"vals\":[\"" + nom + "\"," + nace + "," + muere + "]}";
                    res = res + aux + ",";
                }
            }
            res = res.substring(0, res.length() - 1);   // quito la última coma
            res = res + "]}";
        } catch (Exception ex) {
            ex.printStackTrace();
            //System.out.println("carguero transatlanticoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv\n dvjdkv");
            //return(ex.toString());
        } finally {
            con.close();
        }
        return res;
    }

    public String getCantidadPorEdad(String par) {
        DBConnection con = new DBConnection();
        String res = "{\"catidadporedad\":";
        try {
            con.open();
            Statement st = con.getConection().createStatement();
            ResultSet rs = st.executeQuery("select * from namebasics;");
            String aux;
            int nace;
            int muere;
            int canti = 0;
            while (rs.next()) {
                nace = rs.getInt("birthyear");
                muere = rs.getInt("deathyear");
                if (muere < 0) {   // por si no ha muerto
                    muere = Calendar.getInstance().get(Calendar.YEAR);
                }
                if ((muere - nace) == (Integer.parseInt(par))) {
                    canti++;
                }
            }

            res = res + canti + "}";
        } catch (Exception ex) {
            ex.printStackTrace();
            return(ex.toString());
        } finally {
            con.close();
        }
        return res;
    }

    public String getCantidadPorFranja(String par) {
        DBConnection con = new DBConnection();
        String res = "{\"cantidadporfranja\":";
        int a = Integer.parseInt(par.substring(0, par.indexOf("-")));
        int A = Integer.parseInt(par.substring(par.indexOf("-")+1));
        try {
            con.open();
            Statement st = con.getConection().createStatement();
            ResultSet rs = st.executeQuery("select * from namebasics;");
            String aux;
            int nace;
            int muere;
            int canti = 0;
            while (rs.next()) {
                nace = rs.getInt("birthyear");
                muere = rs.getInt("deathyear");
                if (muere < 0) {   // por si no ha muerto
                    muere = Calendar.getInstance().get(Calendar.YEAR);
                }
                if (((muere - nace) >= a) && ((muere - nace) <= A)) { // está en franja
                    canti++;
                }
            }

            res = res + canti + "}";
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            con.close();
        }
        return res;
    }
    
    public String getDatosPersona(String par) {
        DBConnection con = new DBConnection();
        String res = "{\"name\":\""+ par.replace("_", " ") + "\", "; //[";
        
        //return res + 276 + "}";
        try {
            con.open();
            Statement st1, st2; //, st3;
            st1 = con.getConection().createStatement();
            st2 = con.getConection().createStatement();
                
            String sqlq = "select * from namebasics where primaryname like '" + par + "';";
            ResultSet rs = st1.executeQuery(sqlq);
            String codnom;
            String birth;
            String death;
            
            if (rs.next()) {
                codnom = rs.getString("nconst");
                birth = rs.getString("birthyear");
                death = rs.getString("deathyear");
                res = res + "\"birth\": " + birth + ", \"death\": " + death;
                
                sqlq = "select count(*) as total from personapeli where nconst like '" + codnom + "';";
                ResultSet rs2 = st2.executeQuery(sqlq);
                rs2.next();
                res = res + ", \"nMovies\": "+ rs2.getInt(1) + "}";
            } else {
                res = "-1";
            }
            
        } catch (Exception ex) {
            ex.printStackTrace();
            return(ex.toString());
        } finally {
            con.close();
        }
        return res;
    }
}
