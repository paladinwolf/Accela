var sql = "Update bpd Set bpd.B1_SHORT_NOTES = 'Fermented Malt Beverage and Wine Retailer' FROM B1PERMIT b1p Inner Join BCHCKBOX bcb on b1p.B1_PER_ID1 = bcb.B1_PER_ID1 \
 and b1p.B1_PER_ID2 = bcb.B1_PER_ID2 and b1p.B1_PER_ID3 = bcb.B1_PER_ID3 and b1p.SERV_PROV_CODE = bcb.SERV_PROV_CODE Inner Join BPERMIT_DETAIL bpd on b1p.B1_PER_ID1 = bpd.B1_PER_ID1 \
 and b1p.B1_PER_ID2 = bpd.B1_PER_ID2 and b1p.B1_PER_ID3 = bpd.B1_PER_ID3 and b1p.SERV_PROV_CODE = bpd.SERV_PROV_CODE Where B1_CHECKBOX_DESC = 'Type of License' \
 and B1_CHECKLIST_COMMENT = 'Fermented Malt Beverage and Wine Retailer' and b1p.B1_APPL_STATUS not in ('Closed', 'Defunct') and b1p.SERV_PROV_CODE = 'COSPRINGS'";

var conn = aa.db.getConnection();
var sStmt = conn.prepareStatement(sql);
var rSet = sStmt.executeUpdate();

logDebug(rSet + ' records updated');

if (sStmt) sStmt.close();
if (conn) conn.close();
